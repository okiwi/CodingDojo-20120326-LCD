describe("LCD", function() {
  it("renders 1", function() {
    assert_render('   \n' +
                  '  |\n' +
                  '  |\n', 1);
  });
  
  it("renders 2", function() {
    assert_render(' _ \n' +
                  ' _|\n' +
                  '|_ \n', 2);
  });
  
  it("renders 8", function() {
    assert_render(' _ \n' +
                  '|_|\n' +
                  '|_|\n', 8);
  });
  
  it("renders 7", function() {
    assert_render(' _ \n' +
                  '  |\n' +
                  '  |\n', 7);
  });

  it("renders 12", function() {
    assert_render('    _ \n' +
                  '  | _|\n' +
                  '  ||_ \n', 12);
  });
  it("renders 02", function() {
    assert_render(' _  _ \n' +
                  '| | _|\n' +
                  '|_||_ \n', '02');
  });
 // 1 = { 0-0-0 / 0-0-1 / 0-0-1 }
  
  function assert_render(res, num) {
	  expect(render_number(num)).toEqual(res);
  }


});
