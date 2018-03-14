import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import chai from 'chai'

configure({ adapter: new Adapter() })

chai.config.includeStack = true
global.expect = chai.expect
global.should = chai.should()
