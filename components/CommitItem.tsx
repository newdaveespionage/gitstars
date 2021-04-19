type CommitItemProps = {
  id: string
  name: string
  date: string
  message: string
}

const CommitItem = ({
  id,
  name,
  date,
  message,
}: CommitItemProps): JSX.Element => (
  <div key={id} className="card">
    <div>{name}</div>
    <div>{date}</div>
    <div>{message}</div>
  </div>
)

export default CommitItem
