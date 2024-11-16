import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useAuth } from "../../../context/auth/useAuth";
import { JobDetailsScreen } from "../../JobDetailsScreen";
import useQuery from "../../../hooks/useQuery";

// {"address": {"formattedAddress": "1 Downing St, Chicago, IL 60654, USA", "zoneId": "America/Chicago"}, "email": "jim.rose@gmail.com", "firstName": "Jim", "lastName": "Rose", "maxJobDistance": 20, "phoneNumber": "5096290220", "workerId": "7f90df6e-b832-44e2-b624-3143d428001f"}

// type

// {
//   "address": {
//     "formattedAddress": "1 Downing St, Chicago, IL 60654, USA",
//     "zoneId": "America/Chicago"
//   },
//   "email": "jim.rose@gmail.com",
//   "firstName": "Jim",
//   "lastName": "Rose",
//   "maxJobDistance": 20,
//   "phoneNumber": "5096290220",
//   "workerId": "7f90df6e-b832-44e2-b624-3143d428001f"
// }

// [{"branch": "Downtown", "branchPhoneNumber": "2531233322", "company": {"address": [Object], "name": "Steve Smith Construction", "reportTo": [Object]}, "jobId": "5775d8e18a488e6c5bb08333", "jobTitle": {"imageUrl": "https://imgs.swipejobs.com/js/job-category/construction-1.jpg", "name": "Construction General Helper"}, "milesToTravel": 3.4, "shifts": [[Object]], "wagePerHourInCents": 950}, {"branch": "Chicago", "branchPhoneNumber": "2531233311", "company": {"address": [Object], "name": "C.D. Barnes and Associates", "reportTo": [Object]}, "jobId": "5775d8e18a488e6c5bb08c13", "jobTitle": {"imageUrl": "https://imgs.swipejobs.com/js/job-category/driver-service-3.jpg", "name": "Driver"}, "milesToTravel": 11.666, "requirements": ["Safety Vest", "Hart Hat"], "shifts": [[Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object]], "wagePerHourInCents": 1081.7}]

// Why we're using export default?
// Why not just arrow function, can also use const
export default function HomeScreen() {
  const [list, setList] = useState([]);
  const { workerId } = useAuth();

  const { data, isLoading } = useQuery(`worker/${workerId}/matches`);

  // console.log("data", data);

  // useEffect(() => {
  //   const run = async () => {
  //     const response = await fetch(
  //       `https://test.swipejobs.com/api/worker/${workerId}/profile`,
  //     );

  //     const reponse2 = await fetch(
  //       `https://test.swipejobs.com/api/worker/${workerId}/matches`,
  //     );

  //     const hello = await response.json();

  //     const hello2 = await reponse2.json();

  //     setList(hello);

  //     console.log("hello", hello);
  //     console.log("hello2", hello2);
  //   };

  //   run();
  // }, [workerId]);

  // console.log("list", list);

  // return (
  //   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  //     <Text>Home Screen 1</Text>
  //   </View>
  // );
  return <JobDetailsScreen />;
}
