import config from '../../config';

export default class Page {

    open (path) {
        return browser.url(`${config.url}${path}`)
    }

}
