export default function Header(props: any) {
  return (
  <div className="content">
    <div className="header">
      <h1 className="title">JR Recipes</h1>
      <h2 className="subtitle">Just Recipes. No BS.</h2>
    </div>
    {{...props.children}}
  </div>
  )
}