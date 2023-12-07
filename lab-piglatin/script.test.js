const translate = require("./script.js");
describe("translate", () => {
    test("hello to ellohay", () => {
        expect( translate("hello") ).toEqual("ellohay");
      });
    test("cheese to eesechay", () => {
        expect( translate("cheese") ).toEqual("eesechay");
      });
    test("apple to appleway", () => {
      expect( translate("apple")). toEqual("appleway");
    });
    test("baxter to axterbay", () => {
      expect( translate("baxter") ).toEqual("axterbay");
    });
    test("poop to ooppay", () => {
      expect( translate("poop") ).toEqual("ooppay");
    });
  });