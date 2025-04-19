
import React from "react";
import DoctorsPage from "@/components/Doctors";
import { auth } from "../auth";

const page = async () => {
    const session = await auth();
    const user = session?.user || null;
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Doctors Directory</h1>
            <DoctorsPage user={user} />
        </div>

  );
};

export default page;
