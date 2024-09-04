const StatisticLine = (props) => {
    if (props.name != "positive") {
        return (
            <tr>
                <td>{props.name}</td>
                <td>{props.value}</td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td>{props.name}</td>
                <td>{props.value}</td>
            </tr>
        )
    }
    
}

export default StatisticLine