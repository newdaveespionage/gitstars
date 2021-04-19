import { DateTime } from 'luxon'

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
    <div className="commit-header">
      <span className="name">{name}</span>
      <span className="date">
        {DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_SHORT)}
      </span>
    </div>
    <div className="message">{message}</div>
    <style jsx>{`
      .commit-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
      }
      .name,
      .date,
      .message {
        line-height: 1.5rem;
      }
      .name {
        font-weight: bold;
      }
      .message {
        font-size: 0.9rem;
      }
    `}</style>
  </div>
)

export default CommitItem
