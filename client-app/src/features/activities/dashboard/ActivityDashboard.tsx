import { Grid2} from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

type Props ={
    activities: Activity[]
    selectActivity: (id:string) => void;
    cancelSelectedActivity: () => void;
    selectedActivity?: Activity;
    openForm: (id: string) => void;
    closeForm: () => void;
    editMode: boolean;
    submitForm: (activity: Activity) => void
    deleteActivity: (id : string) => void
}

export default function ActivityDashboard({activities,deleteActivity, cancelSelectedActivity,submitForm, selectActivity,
  openForm,closeForm,editMode, selectedActivity}:Props) {
  return (
    <Grid2 container spacing={3}>
        <Grid2 size={7}>
         <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity} />

        </Grid2>
        <Grid2 size={5}>
        {selectedActivity && !editMode &&
        <ActivityDetails activity={selectedActivity} cancelSelectedActivity=
        {cancelSelectedActivity} openForm={openForm} />}
        { editMode &&
        <ActivityForm submitForm={submitForm} closeForm={closeForm} activity={selectedActivity}/>}

        </Grid2>

    </Grid2>
  )
}
