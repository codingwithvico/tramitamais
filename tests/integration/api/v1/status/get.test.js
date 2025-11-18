test("GET to api/v1/status should be return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const resopnseBody = await response.json();

  const parsedUpdatedAt = new Date(resopnseBody.updated_at).toISOString();
  expect(resopnseBody.updated_at).toEqual(parsedUpdatedAt);
});
