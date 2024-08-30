const  { fetchPosts } = require("../fetch");

describe("Services using fetch" , () => {

  test("Calling fetchPosts function, and expecting array incoming " , async () => {

    const posts = await fetchPosts();
    expect(Array.isArray(posts)).toBeTruthy();
  });
});
