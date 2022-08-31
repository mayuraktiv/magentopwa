import { CircularProgress } from "@material-ui/core"
import classNames from "classnames"

const CenterLoader = (props) => {
    return (
        <div className={classNames('center_loader', props.className)}>
            <CircularProgress color="black" size={30} />
        </div>
    )
}

export default CenterLoader;