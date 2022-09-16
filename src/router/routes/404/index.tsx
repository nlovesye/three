import { Link } from 'react-router-dom';
import { Button, Result } from 'antd';
import { useIntl, FormattedMessage } from 'react-intl';

export default function NotFountPage() {
  const intl = useIntl();
  return (
    <Result
      status="404"
      title="404"
      subTitle={intl.formatMessage({ id: 'component.404.subTitle' })}
      extra={
        <Link to="/">
          <Button type="primary">
            <FormattedMessage id="app.back-home" />
          </Button>
        </Link>
      }
    />
  );
}
