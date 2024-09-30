const string = {
	removePrefix: function (str, prefix) {
		const regexPrefix = new RegExp(`^${prefix}`);
		return str.replace(regexPrefix, '');
	}
};

export default string;
