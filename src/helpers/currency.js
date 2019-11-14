import numbro, { currencyCode } from './numbro-configured';

class Currency {
    /**
     * @param price {Number}
     * @returns {Object}
     */
    static getFormattedPrice(price = 0) {
        const formatted = numbro(price);

        return {
            currency: currencyCode,
            value: formatted.format(),
            complete: formatted.formatCurrency(),
        };
    }

    /**
     * @returns {String}
     */
    static getCurrency() {
        return currencyCode;
    }

    /**
     * @param value {String}
     * @returns {Number}
     */
    static getFloatValue(value) {
        value = typeof value === 'string' ? value.replace(/\.*/g, '') : value;
        return numbro.unformat(value);
    }

    /**
     * Get a fixed number
     * @param number {Number}
     * @returns {Number}
     */
    static fixedNumber(number) {
        return Number(number.toFixed(2));
    }
}

export default Currency;
