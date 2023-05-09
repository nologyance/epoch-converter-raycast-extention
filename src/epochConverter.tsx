import { useState } from 'react';
import { Action, ActionPanel, Form, showToast, Toast } from '@raycast/api';

export default function Command() {
  const [epoch, setEpoch] = useState('');
  const [converted, setConverted] = useState('');

  const handleSubmit = () => {
    try {
      // epoch to human readable
      const dateTime = new Date(Number.parseInt(epoch) * 1000).toLocaleString('ja-JP');
      setConverted(dateTime);
    } catch (error: any) {
      showToast({
        style: Toast.Style.Failure,
        title: "Something went wrong",
        message: error.message,
      });
    }
  };

  return (
      <Form
        actions={
        <ActionPanel>
          <Action.SubmitForm title="Convert" onSubmit={handleSubmit} />
        </ActionPanel>
      }>
      <Form.TextField id="epoch" title="epoch" value={epoch} onChange={setEpoch} />
      <Form.TextField id="converted" title="converted" value={converted} />
    </Form>
  );
}
