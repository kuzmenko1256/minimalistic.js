/**
 * @param value
 * @returns {boolean}
 */
export function required(value) {
    return value.length === 0;
}

/**
 * @param value
 * @returns {boolean}
 */
export function isEmail(value) {
    // eslint-disable-next-line no-useless-escape
    const Reg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return !Reg.test(value);
}

/**
 * @param value
 * @returns {boolean}
 */
export function isNumber(value) {
    const Reg = new RegExp(/^\d+$/);
    return !Reg.test(value);
}

/**
 * @param value
 * @returns {boolean}
 */
export function isTextAndSpace(value) {
    const Reg = new RegExp(/^[a-zA-Z\s]*$/);
    return !Reg.test(value);
}

/**
 * @param count
 * @return {function(*): boolean}
 */
export function length(count) {
    return value => value.length >= count;
}

/**
 * @param maxSize
 * @return {function(*): boolean}
 */
export function maxFileSize(maxSize) {
    return file => file.size >= maxSize;
}

/**
 * @param value
 * @return {boolean}
 */
export function isTrue(value) {
    return Boolean(value) !== true;
}

/**
 * @param value
 * @return {boolean}
 */
export function isFalse(value) {
    return Boolean(value) !== false;
}
