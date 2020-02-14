import ez from 'ezdo'
import Content from './content'


class Header extends ez.Node {
    constructor(router) {
        super()

        let line = new ez.Node()
        line.addClass('header-line')
        this.add(line)

        this.add(new Content(router))
    }
}

export default Header