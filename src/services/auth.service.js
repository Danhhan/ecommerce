"use strict";

const shopModel = require("../models/shop.model");
const bcrypt = require("bcrypt");
const crypto = require("node:crypto");
const keyTokenService = require("./keyToken.service");
const { RoleShop } = require("../constants/enum");
const { createTokenPair } = require("../utils/authUtils");
const { getInfoData } = require("../utils");

class AuthService {
	signUp = async ({ name, email, password }) => {
		try {
			// step1: check email exist
			const holderShop = await shopModel.findOne({ email }).lean();
			console.log("holderShop: ", holderShop);
			if (holderShop) {
				return {
					code: "xxx",
					message: "Shop already registered",
				};
			}
			const passwordHash = await bcrypt.hash(password, 10);
			const newShop = await shopModel.create({
				name,
				email,
				password: passwordHash,
				roles: [RoleShop.SHOP],
			});
			if (newShop) {
				// created privateKey, publicKey
				const privateKey = crypto.randomBytes(64).toString('hex')
				const publicKey = crypto.randomBytes(64).toString('hex')

				console.log('tokens',{ privateKey, publicKey }); // save collection keyStore
				const keyStore = await keyTokenService.createKeyToken({
					userId: newShop._id,
					publicKey,
					privateKey
				});

				if (!keyStore) {
					return {
						code: "xxx",
						message: "keyStore error",
					};
				}
				
				// create token pair
				const tokens = await createTokenPair(
					{ userId: newShop._id, email },
					publicKey,
					privateKey
				);
				console.log(`Created Token Success::`, tokens);
				return {
					code: 201,
					metaData: {
						shop: getInfoData({
							fields: ['_id', 'name', 'email'],
							object: newShop
						}),
						tokens,
					},
				};
			}
			return {
				code: 201,
				metaData: null,
			};
		} catch (error) {
			return {
				code: "XXX",
				message: error.message,
				status: "error",
			};
		}
	};
}

module.exports = new AuthService();
