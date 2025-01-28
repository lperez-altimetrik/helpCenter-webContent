export const ENV_CONFIG_KEYS = {
    id: 'client-id',
    secret: 'client-secret'
};

export const ENV_CONFIG = {
    'https://local.paysafecorp.com': {
        [ENV_CONFIG_KEYS.id]: '03f145a87c4ea2fdd286c1c4ced4425c3dd8e854',
        [ENV_CONFIG_KEYS.secret]: '6ea84e51bb1e97689a59ec567560a0ade73464d73e91dec2db9a7ee9b2fe2365'
    },
    'https://businessportal.dev.mtl.paysafecorp.com': {
        [ENV_CONFIG_KEYS.id]: '812135d8bbc5b41bc837f3982b4760f264685a4c',
        [ENV_CONFIG_KEYS.secret]: 'e9f413e0bd9deabc7811a33d522df6081cf1bbf173cb94b1fda24afce6c08135'
    },
    'https://businessportal.qa.mtl.paysafecorp.com': {
        [ENV_CONFIG_KEYS.id]: '03f145a87c4ea2fdd286c1c4ced4425c3dd8e854',
        [ENV_CONFIG_KEYS.secret]: '6ea84e51bb1e97689a59ec567560a0ade73464d73e91dec2db9a7ee9b2fe2365'
    },
    'https://businessportal.prep.mtl.paysafecorp.com': {
        [ENV_CONFIG_KEYS.id]: '82eb04724748afe32f5cf9085a376cb2aec78a8b',
        [ENV_CONFIG_KEYS.secret]: '60d2883a4aa9451f8fd42be713b7c100b1eabaa2bffea6749d1e8e5761c3fd6d'
    },
    'https://merchant.test.paysafe.com': {
        [ENV_CONFIG_KEYS.id]: '87c84e94a97cb574b82195d688c777fdbbb3eb44',
        [ENV_CONFIG_KEYS.secret]: '64e545b32f751437ccdeb914a3a6394cad78b7b5d4794be82e67c9f55f57f000'
    },
    'https://portals.test.paysafe.com': {
        [ENV_CONFIG_KEYS.id]: '87c84e94a97cb574b82195d688c777fdbbb3eb44',
        [ENV_CONFIG_KEYS.secret]: '64e545b32f751437ccdeb914a3a6394cad78b7b5d4794be82e67c9f55f57f000'
    },
    'https://merchant.paysafe.com': {
        [ENV_CONFIG_KEYS.id]: '7f9d63d2a82fcea3e138b0f6db2fe9da5c7a0096',
        [ENV_CONFIG_KEYS.secret]: '0117495286ea9a563764110979eaa7437818b415f1790cf96eac0c0cd0120870'
    },
    'https://portals.paysafe.com': {
        [ENV_CONFIG_KEYS.id]: '7f9d63d2a82fcea3e138b0f6db2fe9da5c7a0096',
        [ENV_CONFIG_KEYS.secret]: '0117495286ea9a563764110979eaa7437818b415f1790cf96eac0c0cd0120870'
    },
    MOCK_SERVER: false
};

export const LN_PEP_CONFIG = {
    maxScore: 90
};

export const JUMIO_CONFIG = {
    USER_AGENT: 'MyCompany MyApp/1.0.0',
    AUTHORIZATION: 'Basic ZTgwY2RmYzYtZjk0YS00MTQ4LTliYjctZDJkZThmN2RiMmRkOnNOSjlCR2ZPUFI5ZzBCOEI5dVFJMndSdnJUbU9EYmxT'
};

export const CAPTCHA_DISABLE_DOMAINS = [
    'http://localhost:4200',
    'https://local.paysafecorp.com',
    'https://businessportal.dev.mtl.paysafecorp.com',
    'https://businessportal.qa.mtl.paysafecorp.com',
    'https://businessportal.prep.mtl.paysafecorp.com',
    'https://merchant.paysafe.com',
    'https://merchant.test.paysafe.com',
    'https://apigw0.mtest.mon.paysafe.com',
    'https://portals.test.paysafe.com',
    'https://portals.paysafe.com'
];

export const NETBANX_PORTAL_ENV_URLS = {
    'https://local.paysafecorp.com': 'https://app.qa.paysafe.com',
    'https://businessportal.dev.mtl.paysafecorp.com': 'https://app.dev.paysafe.com',
    'https://businessportal.qa.mtl.paysafecorp.com': 'https://app.qa.paysafe.com',
    'https://businessportal.prep.mtl.paysafecorp.com': 'https://app.prep.paysafe.com',
    'https://merchant.paysafe.com': 'https://login.netbanx.com',
    'https://merchant.test.paysafe.com': 'https://login.test.netbanx.com',
    'https://apigw0.mtest.mon.paysafe.com': 'https://login.test.netbanx.com',
    'https://portals.test.paysafe.com': 'https://login.test.netbanx.com',
    'https://portals.paysafe.com': 'https://login.netbanx.com'
};
export const WS_CHATBOT_CONFIG = {
    'portal': {
        'localhost': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: '7aca519b-ba18-4968-86c2-f2991c0b68be',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'local.paysafecorp.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: '7aca519b-ba18-4968-86c2-f2991c0b68be',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'businessportal.dev.mtl.paysafecorp.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: '7aca519b-ba18-4968-86c2-f2991c0b68be',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'businessportal.qa.mtl.paysafecorp.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: '7aca519b-ba18-4968-86c2-f2991c0b68be',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'businessportal.prep.mtl.paysafecorp.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: '7aca519b-ba18-4968-86c2-f2991c0b68be',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'merchant.test.paysafe.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: '422f4bf7-0613-468b-b526-67a95b227b93',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'portals.test.paysafe.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: '422f4bf7-0613-468b-b526-67a95b227b93',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'apigw0.mtest.mon.paysafe.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: '7aca519b-ba18-4968-86c2-f2991c0b68be',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'merchant.paysafe.com': {
            host: 'https://www.paysafe.com',
            integrationId: '422f4bf7-0613-468b-b526-67a95b227b93',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'portals.paysafe.com': {
            host: 'https://www.paysafe.com',
            integrationId: '422f4bf7-0613-468b-b526-67a95b227b93',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        }
    },
    'login-app': {
        'localhost': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: '7aca519b-ba18-4968-86c2-f2991c0b68be',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'local.paysafecorp.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: '7aca519b-ba18-4968-86c2-f2991c0b68be',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'businessportal.dev.mtl.paysafecorp.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: '7aca519b-ba18-4968-86c2-f2991c0b68be',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'businessportal.qa.mtl.paysafecorp.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: '7aca519b-ba18-4968-86c2-f2991c0b68be',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'businessportal.prep.mtl.paysafecorp.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: '7aca519b-ba18-4968-86c2-f2991c0b68be',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'merchant.test.paysafe.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: '422f4bf7-0613-468b-b526-67a95b227b93',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'portals.test.paysafe.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: '422f4bf7-0613-468b-b526-67a95b227b93',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'apigw0.mtest.mon.paysafe.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: '7aca519b-ba18-4968-86c2-f2991c0b68be',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        }, 'merchant.paysafe.com': {
            host: 'https://www.paysafe.com',
            integrationId: '422f4bf7-0613-468b-b526-67a95b227b93',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'portals.paysafe.com': {
            host: 'https://www.paysafe.com',
            integrationId: '422f4bf7-0613-468b-b526-67a95b227b93',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        }
    },
    'skrill': {
        'localhost': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'a97f2c59-06ed-41e2-841e-b85a46f30e96',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'local.paysafecorp.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'a97f2c59-06ed-41e2-841e-b85a46f30e96',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'businessportal.dev.mtl.paysafecorp.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'a97f2c59-06ed-41e2-841e-b85a46f30e96',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'businessportal.qa.mtl.paysafecorp.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'a97f2c59-06ed-41e2-841e-b85a46f30e96',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'businessportal.prep.mtl.paysafecorp.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'a97f2c59-06ed-41e2-841e-b85a46f30e96',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'merchant.test.paysafe.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'fb612464-f95c-42c8-8065-c7c22ac45537',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'portals.test.paysafe.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'fb612464-f95c-42c8-8065-c7c22ac45537',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'apigw0.mtest.mon.paysafe.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'fb612464-f95c-42c8-8065-c7c22ac45537',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'merchant.paysafe.com': {
            host: 'https://www.paysafe.com',
            integrationId: 'fb612464-f95c-42c8-8065-c7c22ac45537',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'portals.paysafe.com': {
            host: 'https://www.paysafe.com',
            integrationId: 'fb612464-f95c-42c8-8065-c7c22ac45537',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        }
    },
    'neteller': {
        'localhost': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'a97f2c59-06ed-41e2-841e-b85a46f30e96',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'local.paysafecorp.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'a97f2c59-06ed-41e2-841e-b85a46f30e96',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'businessportal.dev.mtl.paysafecorp.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'a97f2c59-06ed-41e2-841e-b85a46f30e96',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'businessportal.qa.mtl.paysafecorp.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'a97f2c59-06ed-41e2-841e-b85a46f30e96',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'businessportal.prep.mtl.paysafecorp.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'a97f2c59-06ed-41e2-841e-b85a46f30e96',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'merchant.test.paysafe.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'fb612464-f95c-42c8-8065-c7c22ac45537',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'portals.test.paysafe.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'fb612464-f95c-42c8-8065-c7c22ac45537',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'apigw0.mtest.mon.paysafe.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'fb612464-f95c-42c8-8065-c7c22ac45537',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'merchant.paysafe.com': {
            host: 'https://www.paysafe.com',
            integrationId: 'fb612464-f95c-42c8-8065-c7c22ac45537',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'portals.paysafe.com': {
            host: 'https://www.paysafe.com',
            integrationId: 'fb612464-f95c-42c8-8065-c7c22ac45537',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        }
    },
    'business-wallet': {
        'localhost': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'a97f2c59-06ed-41e2-841e-b85a46f30e96',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'local.paysafecorp.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'a97f2c59-06ed-41e2-841e-b85a46f30e96',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'businessportal.dev.mtl.paysafecorp.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'a97f2c59-06ed-41e2-841e-b85a46f30e96',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'businessportal.qa.mtl.paysafecorp.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'a97f2c59-06ed-41e2-841e-b85a46f30e96',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'businessportal.prep.mtl.paysafecorp.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'a97f2c59-06ed-41e2-841e-b85a46f30e96',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'merchant.test.paysafe.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'fb612464-f95c-42c8-8065-c7c22ac45537',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'portals.test.paysafe.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'fb612464-f95c-42c8-8065-c7c22ac45537',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'apigw0.mtest.mon.paysafe.com': {
            host: 'https://account.eu-qa.sandbox.dw-cloud.net',
            integrationId: 'fb612464-f95c-42c8-8065-c7c22ac45537',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'merchant.paysafe.com': {
            host: 'https://www.paysafe.com',
            integrationId: 'fb612464-f95c-42c8-8065-c7c22ac45537',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        },
        'portals.paysafe.com': {
            host: 'https://www.paysafe.com',
            integrationId: 'fb612464-f95c-42c8-8065-c7c22ac45537',
            serviceInstanceId: '0d9e92bf-ba7c-4a52-9efe-c991dc5676f7'
        }
    },
};
export const APERIA_ENV_URLS = {
    'https://local.paysafecorp.com': 'https://dev-748010.oktapreview.com/home/dev-748010_aperiapcitest_1/0oa240579pjRq99d70h8/aln2405omg86sA1kw0h8',
    'https://businessportal.dev.mtl.paysafecorp.com': 'https://dev-748010.oktapreview.com/home/dev-748010_aperiapcitest_1/0oa240579pjRq99d70h8/aln2405omg86sA1kw0h8',
    'https://businessportal.qa.mtl.paysafecorp.com': 'https://dev-748010.oktapreview.com/home/dev-748010_aperiapcitest_1/0oa240579pjRq99d70h8/aln2405omg86sA1kw0h8',
    'https://businessportal.prep.mtl.paysafecorp.com': 'https://dev-748010.oktapreview.com/home/dev-748010_aperiapcitest_1/0oa240579pjRq99d70h8/aln2405omg86sA1kw0h8',
    'https://merchant.paysafe.com': 'https://paysafe.okta.com/home/paysafe_aperiapci_1/0oalc7354kr3nAdD44x7/alnlc776kajVJe1bA4x7',
    'https://merchant.test.paysafe.com': 'https://dev-748010.oktapreview.com/home/dev-748010_aperiapcitest_1/0oa240579pjRq99d70h8/aln2405omg86sA1kw0h8',
    'https://apigw0.mtest.mon.paysafe.com': 'https://dev-748010.oktapreview.com/home/dev-748010_aperiapcitest_1/0oa240579pjRq99d70h8/aln2405omg86sA1kw0h8',
    'https://portals.test.paysafe.com': 'https://dev-748010.oktapreview.com/home/dev-748010_aperiapcitest_1/0oa240579pjRq99d70h8/aln2405omg86sA1kw0h8',
    'https://portals.paysafe.com': 'https://paysafe.okta.com/home/paysafe_aperiapci_1/0oalc7354kr3nAdD44x7/alnlc776kajVJe1bA4x7'
};
