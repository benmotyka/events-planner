import "dotenv/config";

module.exports = {
    name: "Events Planner",
    slug: "eventsplanner",
    version: "1.0.0",
    privacy: "public",
    scheme: "com.benmotyka.eventsplanner",
    description:
        "Events Planner is an application that allows you to plan and attend events in your city.",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    updates: {
        fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
        supportsTablet: true,
        bundleIdentifier: "com.benmotyka.eventsplanner",
    },
    android: {
        adaptiveIcon: {
            foregroundImage: "./assets/icons/icon.png",
            backgroundColor: "#FFFFFF",
        },
        package: "com.benmotyka.eventsplanner",
        googleServicesFile: "./keys/google-services.json",
        versionCode: 11,
    },
    web: {
        favicon: "./assets/icon.png",
    },
    plugins: ["sentry-expo"],
    extra: {
        apiUrl: process.env.API_URL,
        sentryDsn: process.env.SENTRY_DSN,
        basicAuthUsername: process.env.BASIC_AUTH_USERNAME,
        basicAuthPassword: process.env.BASIC_AUTH_PASSWORD,
        eas: {
            projectId: "9b57b4b7-39d0-474c-9ffb-3f5d617bcabd",
        },
    },
    hooks: {
        postPublish: [
            {
                file: "sentry-expo/upload-sourcemaps",
                config: {
                    organization: process.env.SENTRY_ORGANIZATION,
                    project: process.env.SENTRY_PROJECT,
                    authToken: process.env.SENTRY_AUTHTOKEN,
                },
            },
        ],
    },
};
