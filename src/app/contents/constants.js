// Get constants from window.env on Docker (ie. when config/appConfig.js exists).
if (window.env) {
  var { ELASTIC_URL, VALIDATOR_URL } = window.env;
}

export const repoUrl = ELASTIC_URL || '';
export const privacyPolicyUrl = `https://developers.italia.it/it/privacy-policy/`;
export const repositoryUrl = `https://docs.italia.it/italia/developers-italia/publiccodeyml/it/master/`;
export const sampleUrl = `https://raw.githubusercontent.com/italia/publiccode.yml/master/docs/it/example/publiccode.minimal.yml`;
export const elasticUrl = ELASTIC_URL || '';
export const validatorUrl = VALIDATOR_URL || '';
export const APP_FORM = "appForm";
