import 'jsdom-global/register'
import chai from 'chai'
import mockCssModules from 'mock-css-modules'

chai.should()

mockCssModules.register(['.css'])