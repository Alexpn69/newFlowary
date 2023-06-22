const getRecordByName = async (name) => {
  try {
    const response = await fetch(
      `https://sea-lion-app-op3tn.ondigitalocean.app/get_record_by_name/${name}`
    );
    const data = await response.json();
    return data.record;
  } catch (error) {
    console.log(error);
  }
};

export default getRecordByName;
