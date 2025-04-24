export default function Icon(props: { index: number}) {
    return <img src={`/svg/group-${props.index}-icon.svg`}></img>
}