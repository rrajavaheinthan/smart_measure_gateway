import { useIntl } from 'react-intl';
import { CommonUtils } from 'coupa-common-js';

const useI18n = () => {

    const intl = useIntl();

    CommonUtils.registerCustomI18nTranslator((key, attrs) => {
        return intl.formatMessage({ id: key });
    });

    return {
        translate: intl.formatMessage
    }
}

export default useI18n;