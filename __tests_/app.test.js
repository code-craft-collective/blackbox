describe("app.js", () => {
  it("should require the necessary modules", () => {
    const require = jest.fn();
    require("mongoose");
    require("express");
    require("morgan");
    require("cookie-parser");
    require("cors");
    expect(require).toBeCalledWith("mongoose");
    expect(require).toBeCalledWith("express");
    expect(require).toBeCalledWith("morgan");
    expect(require).toBeCalledWith("cookie-parser");
    expect(require).toBeCalledWith("cors");
  });
});
