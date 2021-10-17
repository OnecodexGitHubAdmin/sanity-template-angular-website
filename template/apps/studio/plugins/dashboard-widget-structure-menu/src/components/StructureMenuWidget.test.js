const rewire = require("rewire")
const StructureMenuWidget = rewire("./StructureMenuWidget")
const getIconComponent = StructureMenuWidget.__get__("getIconComponent")
// @ponicode
describe("getIconComponent", () => {
    test("0", () => {
        let callFunction = () => {
            getIconComponent({ icon: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", schemaType: { icon: "https://api.telegram.org/bot" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getIconComponent({ icon: "http://www.example.com/route/123?foo=bar", schemaType: { icon: "http://www.example.com/route/123?foo=bar" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getIconComponent({ icon: "www.google.com", schemaType: { icon: "https://twitter.com/path?abc" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getIconComponent({ icon: "https://croplands.org/app/a/reset?token=", schemaType: { icon: "https://accounts.google.com/o/oauth2/revoke?token=%s" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getIconComponent({ icon: "https://croplands.org/app/a/reset?token=", schemaType: { icon: "https://" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getIconComponent(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
