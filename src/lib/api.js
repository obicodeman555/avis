const FIREBASE_DOMAIN = "https://automated-vin-default-rtdb.firebaseio.com";

export async function addStaff(staffData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/staffs.json`, {
    method: "POST",
    body: JSON.stringify(staffData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create staff.");
  }

  return null;
}

export async function addMember(memberData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/members.json`, {
    method: "POST",
    body: JSON.stringify(memberData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create Member.");
  }

  return null;
}

export async function getAllMembers() {
  const response = await fetch(`${FIREBASE_DOMAIN}/members.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch members");
  }

  //memebers data arr of objects
  const members = [];

  //create the member object that exist in the members array.
  for (const key in data) {
    //define member object

    const member = {
      id: key,
      ...data[key],
    };

    //put into members array to hold data
    members.push(member);
  }

  return members;
}

export async function getAllStaffs() {
  const response = await fetch(`${FIREBASE_DOMAIN}/staffs.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch members");
  }

  //staffs data arr of objects
  const staffs = [];

  //create the member object that exist in the members array.
  for (const key in data) {
    //define member object

    const staff = {
      id: key,
      ...data[key],
    };

    //put into members array to hold data
    staffs.push(staff);
  }

  return staffs;
}
export async function getAllVehicles() {
  const response = await fetch(`${FIREBASE_DOMAIN}/officialVehicles.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch members");
  }

  //staffs data arr of objects
  const officialVehicles = [];

  //create the member object that exist in the members array.
  for (const key in data) {
    //define member object

    const officialVehicle = {
      id: key,
      ...data[key],
    };

    //put into members array to hold data
    officialVehicles.push(officialVehicle);
  }

  return officialVehicles;
}

export async function addRegisteredVehicle(vehicleData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/officialVehicles.json`, {
    method: "POST",
    body: JSON.stringify(vehicleData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create registration.");
  }

  return null;
}
