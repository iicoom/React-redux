import { connect } from "react-redux"
import Link from "../components/Link"
import { setVisibility} from "../actions/index";

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibleFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibility(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)