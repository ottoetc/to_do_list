describe('Todo', function() {
  it("creates a list item", function () {
    var listItem = new Todo ("groceries");
    expect(listItem.item).to.equal("groceries");
  });
});
