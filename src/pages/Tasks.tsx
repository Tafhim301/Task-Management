import { selectTasks } from '@/redux/features/task/task-slice'
import { useAppSelector } from '@/redux/hook'
function Tasks() {
    const task = useAppSelector(selectTasks) 
    console.log(task)
    return (
        <div>Tasks</div>
    )
}

export default Tasks