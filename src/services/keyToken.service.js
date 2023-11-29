"use strict";

const keyTokenModel = require("../models/keyToken.model");

class KeyTokenService {
	createKeyToken = async ({ userId, publicKey, privateKey }) => {
		try {
			const tokens = keyTokenModel.create({
				user: userId,
				publicKey,
				privateKey,
			});
			return tokens ? publicKeyString : null;
		} catch (error) {
			return error;
		}
	};
}

module.exports = new KeyTokenService();
