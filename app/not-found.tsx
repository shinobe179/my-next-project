import sytles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={sytles.container}>
      <dl>
        <dt className={sytles.title}>ページが見つかりませんでした</dt>
        <dd className={sytles.text}>
          あなたがアクセスしようとしたページは存在しません。
          <br />
          URLを再度ご確認ください。
        </dd>
      </dl>
    </div>
  );
}
