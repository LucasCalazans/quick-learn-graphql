import numbro from 'numbro';
const currencyCode = 'R$';
const format = {
    mantissa: 2,
    average: false,
    output: 'currency',
    spaceSeparated: true,
    thousandSeparated: true,
};
numbro.registerLanguage({
    languageTag: 'pt-BR',
    delimiters: {
        thousands: '.',
        decimal: ',',
    },
    abbreviations: {
        million: 'm',
        billion: 'b',
        trillion: 't',
        thousand: 'k',
    },
    ordinal: () => {
        return 'º';
    },
    currency: {
        code: 'BRL',
        position: 'prefix',
        symbol: currencyCode,
    },
    currencyFormat: format,
    formats: {
        fourDigits: format,
        fullWithNoDecimals: format,
        fullWithTwoDecimals: format,
        fullWithTwoDecimalsNoCurrency: format,
    },
});
numbro.setLanguage('pt-BR');
numbro.setDefaults(format);

export default numbro;
export { currencyCode };
