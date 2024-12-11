import Alert from "../components/ui/Alert/Alert";
import { Ban, BellRing, CheckCheck, FileWarning, Info } from "lucide-react";


const Home = () => {
  return (
    <div style={{ margin: "2rem" }}>
      <Alert
        type="alert-default"
        icon={<BellRing size={20} />}
        title={"Upgrade Your plan"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo nulla nam ratione cupiditate? Culpa, doloremque asperiores quisquam delectus reprehenderit nulla amet velit architecto ut, quas repellendus eius mollitia quod."
        }
      />
      <Alert
        type="alert-danger"
        icon={<Ban size={20} />}
        title={"Something Went Wrong"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo nulla nam ratione cupiditate? Culpa, doloremque asperiores quisquam delectus reprehenderit nulla amet velit architecto ut, quas repellendus eius mollitia quod."
        }
      />
      <Alert
        type="alert-success"
        icon={<CheckCheck size={20} />}
        title={"Your Order has been processed"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo nulla nam ratione cupiditate? Culpa, doloremque asperiores quisquam delectus reprehenderit nulla amet velit architecto ut, quas repellendus eius mollitia quod."
        }
      />
      <Alert type="alert-info" icon={<Info size={20} />} title={"Note"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo
          nulla nam ratione cupiditate? Culpa, <a href="/">doloremque</a> asperiores quisquam
          delectus reprehenderit nulla amet velit architecto ut, quas
          repellendus eius mollitia quod.
        </p>
      </Alert>
      <Alert
        type="alert-warning"
        icon={<FileWarning size={20} />}
        title={"Tips & Tricks"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo nulla nam ratione cupiditate? Culpa, doloremque asperiores quisquam delectus reprehenderit nulla amet velit architecto ut, quas repellendus eius mollitia quod."
        }
      />
    </div>
  )
}

export default Home