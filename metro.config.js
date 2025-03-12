const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...config.resolver.sourceExts, "svg"],
};

// ⚡ Fix lỗi khi kết hợp với NativeWind
module.exports = withNativeWind(
  {
    ...config,
    transformer: {
      ...config.transformer,
      getTransformOptions: async () => ({
        transform: { experimentalImportSupport: false, inlineRequires: true },
      }),
    },
  },
  { input: "./app/global.css" }
);
