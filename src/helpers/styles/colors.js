const colors = {
    primaryColor: '#FF0000',
    secondaryColor: '#000000',
    whiteColor: '#ffffff',
    blackColor: '#000000',
};

const hexToRgb = hex => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return !result
        ? null
        : `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
};

const colorKeys = Object.keys(colors);
colors.rgb = {};
colorKeys.forEach(name => (colors.rgb[name] = hexToRgb(colors[name])));

export default colors;
