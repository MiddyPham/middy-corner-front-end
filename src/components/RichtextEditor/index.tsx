// Create a separate component which will load RichTextEditor only in browser
import React, { useState, useEffect } from 'react';
import type { RichTextEditorProps } from '@mantine/rte';

export function RichText(props: RichTextEditorProps) {
  const [RichTextEditor, setRichTextEditor] = useState<React.ComponentType<RichTextEditorProps> | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@mantine/rte').then((module) => {
        setRichTextEditor(() => module.RichTextEditor);
      });
    }
  }, []);

  if (!RichTextEditor) {
    return null;
  }

  return <RichTextEditor {...props} />;
}
