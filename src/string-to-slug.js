/**
 * String to Slug Converter - Multi Language
 * @author BDKweb (https://dkhuong.com)
 * @version 1.0
 * @license MIT
 */

class StringToSlug {
    constructor(options = {}) {
        this.config = {
            setEvents: ['keyup', 'keydown', 'blur', 'input'],
            getPut: '#slug',
            space: '-',
            prefix: '',
            suffix: '',
            replace: '',
            AND: 'and',
            language: 'auto',
            options: {},
            callback: null,
            ...options
        };

        this.config.options = {
            separator: this.config.space,
            custom: {'&': this.config.AND},
            ...this.config.options
        };

        this.languageMaps = {
            'vi': this.getVietnameseMap(),
            'fr': this.getFrenchMap(),
            'de': this.getGermanMap(),
            'es': this.getSpanishMap(),
            'default': this.getDefaultMap()
        };
    }

    getVietnameseMap() {
        return {
            'à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ': 'a',
            'è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ': 'e',
            'ì|í|ị|ỉ|ĩ': 'i',
            'ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ': 'o',
            'ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ': 'u',
            'ỳ|ý|ỵ|ỷ|ỹ': 'y',
            'đ': 'd',
            'À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ': 'A',
            'È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ': 'E',
            'Ì|Í|Ị|Ỉ|Ĩ': 'I',
            'Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ': 'O',
            'Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ': 'U',
            'Ỳ|Ý|Ỵ|Ỷ|Ỹ': 'Y',
            'Đ': 'D'
        };
    }

    getFrenchMap() {
        return {
            'à|â|ä': 'a',
            'é|è|ê|ë': 'e',
            'î|ï': 'i',
            'ô|ö': 'o',
            'ù|û|ü': 'u',
            'ç': 'c',
            'À|Â|Ä': 'A',
            'É|È|Ê|Ë': 'E',
            'Î|Ï': 'I',
            'Ô|Ö': 'O',
            'Ù|Û|Ü': 'U',
            'Ç': 'C'
        };
    }

    getGermanMap() {
        return {
            'ä|æ': 'ae',
            'ö': 'oe',
            'ü': 'ue',
            'ß': 'ss',
            'Ä|Æ': 'Ae',
            'Ö': 'Oe',
            'Ü': 'Ue'
        };
    }

    getSpanishMap() {
        return {
            'á': 'a',
            'é': 'e',
            'í': 'i',
            'ó': 'o',
            'ú|ü': 'u',
            'ñ': 'n',
            'Á': 'A',
            'É': 'E',
            'Í': 'I',
            'Ó': 'O',
            'Ú|Ü': 'U',
            'Ñ': 'N'
        };
    }

    getDefaultMap() {
        return {
            'à|á|â|ã|ä': 'a',
            'è|é|ê|ë': 'e',
            'ì|í|î|ï': 'i',
            'ò|ó|ô|õ|ö': 'o',
            'ù|ú|û|ü': 'u',
            'ñ': 'n',
            'ç': 'c',
            'ÿ': 'y',
            'ø': 'o',
            'å': 'a',
            'æ': 'ae',
            'À|Á|Â|Ã|Ä': 'A',
            'È|É|Ê|Ë': 'E',
            'Ì|Í|Î|Ï': 'I',
            'Ò|Ó|Ô|Õ|Ö': 'O',
            'Ù|Ú|Û|Ü': 'U',
            'Ñ': 'N',
            'Ç': 'C',
            'Ÿ': 'Y',
            'Ø': 'O',
            'Å': 'A',
            'Æ': 'Ae',
            'ß': 'ss'
        };
    }

    convert(text) {
        let { prefix, suffix, replace, options, language } = this.config;
        
        if (replace) {
            text = text.replace(new RegExp(replace, 'g'), '');
        }
        
        let slug = this.multiLanguageToSlug(text, language, options);
        return prefix + slug + suffix;
    }

    multiLanguageToSlug(text, language = 'auto', options) {
        if (!text) return '';

        let separator = options.separator || '-';
        text = String(text).trim();

        const langMap = this.languageMaps[language] || this.detectLanguage(text);

        Object.keys(langMap).forEach(pattern => {
            const regex = new RegExp(pattern, 'g');
            text = text.replace(regex, langMap[pattern]);
        });

        if (options.custom) {
            Object.keys(options.custom).forEach(key => {
                const regex = new RegExp(this.escapeRegExp(key), 'g');
                text = text.replace(regex, options.custom[key]);
            });
        }

        text = text.replace(/\s+/g, separator);
        text = text.replace(new RegExp(`[^a-zA-Z0-9${this.escapeRegExp(separator)}]`, 'g'), '');
        text = text.replace(new RegExp(`${this.escapeRegExp(separator)}+`, 'g'), separator);
        text = text.toLowerCase();
        text = text.replace(new RegExp(`^${this.escapeRegExp(separator)}|${this.escapeRegExp(separator)}$`, 'g'), '');

        return text;
    }

    detectLanguage(text) {
        if (/[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]/.test(text)) {
            return this.languageMaps.vi;
        }
        if (/[äöüßÄÖÜ]/.test(text)) {
            return this.languageMaps.de;
        }
        if (/[àâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ]/.test(text)) {
            return this.languageMaps.fr;
        }
        if (/[áéíóúüñÁÉÍÓÚÜÑ]/.test(text)) {
            return this.languageMaps.es;
        }
        return this.languageMaps.default;
    }

    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    init(sourceElement, targetElement) {
        const source = typeof sourceElement === 'string' 
            ? document.querySelector(sourceElement) 
            : sourceElement;
        
        const target = typeof targetElement === 'string' 
            ? document.querySelector(targetElement) 
            : targetElement;

        if (!source || !target) {
            console.warn('Source or target element not found');
            return;
        }

        this.config.setEvents.forEach(event => {
            source.addEventListener(event, () => {
                const slug = this.convert(source.value);
                target.value = slug;
                
                if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
                    target.textContent = slug;
                }

                if (this.config.callback && typeof this.config.callback === 'function') {
                    this.config.callback(slug);
                }
            });
        });

        const initialSlug = this.convert(source.value);
        target.value = initialSlug;
        
        if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
            target.textContent = initialSlug;
        }

        return this;
    }

    updateConfig(newOptions) {
        this.config = { ...this.config, ...newOptions };
        return this;
    }
}

function stringToSlug(sourceElement, targetElement, options = {}) {
    const instance = new StringToSlug(options);
    return instance.init(sourceElement, targetElement);
}

window._stringToSlug_API = function(text, options = {}) {
    const instance = new StringToSlug(options);
    return instance.convert(text);
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { StringToSlug, stringToSlug };
}