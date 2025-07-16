import { Suspense } from "react";
import UserList from "../userlist/userlist";
import Loading from "../loading/loading";


async function Page() {
  return (
    <>
  <Suspense fallback={<> 
      <Loading />
    </>}>
    <UserList />
  </Suspense>
    </>
  );
}

export default Page;
