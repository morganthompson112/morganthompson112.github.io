export default function Container(props) {
  return (
    <div style={props.style}>
      {props.children}
    </div>
  );
}