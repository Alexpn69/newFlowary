const postRecordTest = async (name, address) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify({ name, address }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    await fetch(
      `https://new-flowary.vercel.app/api/data`,

      requestOptions
    );
  } catch (error) {
    console.log(error.message);
  }
};
export default postRecordTest;
