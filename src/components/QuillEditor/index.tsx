"use client";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import styled, from "styled-components";  
import { bounce } from "../LoadingCustom/loadingCustomStyle";

export const QuillEditor = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <div>Đang tải editor...</div>,
});

const ControllerEditor = styled(QuillEditor)`
  &.quill {
    border: 3px solid #000000 !important;
    border-radius: 15px !important;
    box-shadow: 4px 4px 0px #333333 !important;
    background: #ffffff !important;
    overflow: hidden;
    transition: all 0.3s ease;
    
    &:focus-within {
      box-shadow: 6px 6px 0px #333333 !important;
      transform: translateY(-2px);
    }
  }
  
  .ql-toolbar {
    display: flex;
    border: none !important;
    border-bottom: 3px solid #000000 !important;
    border-radius: 15px 15px 0 0 !important;
    background: #ffffff !important;
    padding: 1rem !important;
    .ql-picker .ql-picker-options span.ql-picker-item {
        padding: 0 !important;
        svg {
            width: 20px !important; 
            height: 20px !important;
        }
      }
    .ql-formats {
      margin-right: 15px;
      height: 38px !important;
      display: flex;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
      .ql-header, button {
        height: 38px !important;
        min-width: 38px !important;
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: nowrap;
        .ql-picker-label {
          height: 38px !important;
        }
      }
      .ql-color, .ql-color-picker {
        margin-right: 4px !important;
        .ql-picker-options .ql-picker-item {
          margin-right: 4px !important;
        }
      }
      .ql-picker {
        display: flex;
        align-items: center;
        gap: 10px;
        height: 38px !important;
        min-width: 38px !important;
        .ql-picker-label {
          height: 38px !important;
        }
      }
      
      &:last-child {
        margin-right: 0;
      }
    }
    
    /* Style cho các button */
    button {
      border: 2px solid #000000 !important;
      border-radius: 8px !important;
      background: #ffffff !important;
      margin: 2px !important;
      width: 32px !important;
      height: 32px !important;
      transition: all 0.3s ease !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      
      &:hover {
        background: #f0f0f0 !important;
        transform: translateY(-2px) !important;
        box-shadow: 2px 2px 0px #333333 !important;
        animation: ${bounce} 0.3s ease;
      }
      
      &.ql-active {
        background: #000000 !important;
        color: #ffffff !important;
        box-shadow: 2px 2px 0px #333333 !important;
        
        .ql-stroke {
          stroke: #ffffff !important;
        }
        
        .ql-fill {
          fill: #ffffff !important;
        }
      }
      
      .ql-stroke {
        stroke: #000000 !important;
        stroke-width: 2px !important;
      }
      
      .ql-fill {
        fill: #000000 !important;
      }
    }
    
    /* Style cho các picker (dropdown) */
    .ql-picker {
      .ql-picker-label {
        border: 2px solid #000000 !important;
        border-radius: 8px !important;
        background: #ffffff !important;
        padding: 0.5rem !important;
        font-weight: 600 !important;
        height: 32px !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        transition: all 0.3s ease !important;
        
        &:hover {
          background: #f0f0f0 !important;
          transform: translateY(-1px) !important;
          box-shadow: 2px 2px 0px #333333 !important;
        }
        
        &::before {
          font-weight: 600 !important;
          color: #000000 !important;
        }
        
        .ql-stroke {
          stroke: #000000 !important;
          stroke-width: 2px !important;
        }
        
        .ql-fill {
          fill: #000000 !important;
        }
      }
      
      .ql-picker-options {
        background: #ffffff !important;
        border: 3px solid #000000 !important;
        border-radius: 15px !important;
        box-shadow: 4px 4px 0px #333333 !important;
        padding: 0.5rem !important;
        margin-top: 0.5rem !important;
        
        .ql-picker-item {
          padding: 0.5rem 1rem !important;
          border-radius: 8px !important;
          font-weight: 600 !important;
          transition: all 0.3s ease !important;
          margin: 2px 0 !important;
          
          &:hover {
            background: #f0f0f0 !important;
            transform: translateY(-1px) !important;
            box-shadow: 2px 2px 0px #333333 !important;
          }
          
          &.ql-selected {
            background: #000000 !important;
            color: #ffffff !important;
          }
        }
      }
      
      &.ql-expanded .ql-picker-label {
        background: #000000 !important;
        color: #ffffff !important;
        
        .ql-stroke {
          stroke: #ffffff !important;
        }
        
        .ql-fill {
          fill: #ffffff !important;
        }
      }
    }
    
    /* Style đặc biệt cho color picker */
    .ql-color-picker .ql-picker-item {
      width: 20px !important;
      height: 20px !important;
      border: 2px solid #000000 !important;
      border-radius: 4px !important;
      margin: 2px !important;
      
      &:hover {
        transform: scale(1.1) !important;
        box-shadow: 2px 2px 0px #333333 !important;
      }
    }
  }
  
  .ql-container {
    border: none !important;
    border-radius: 0 0 15px 15px !important;
    font-family: inherit !important;
    background: #ffffff !important;
  }
  
  .ql-editor {
    padding: 1.5rem !important;
    font-size: 1rem !important;
    line-height: 1.6 !important;
    font-weight: 600 !important;
    color: #000000 !important;
    min-height: 350px !important;
    
    &::before {
      color: #666666 !important;
      font-weight: 600 !important;
      font-style: italic !important;
    }
    
    /* Typography styles */
    h1, h2, h3, h4, h5, h6 {
      font-weight: 800 !important;
      color: #000000 !important;
      text-shadow: 1px 1px 0px #333333 !important;
    }
    
    strong {
      font-weight: 800 !important;
      text-shadow: 1px 1px 0px #333333 !important;
    }
    
    blockquote {
      border-left: 4px solid #000000 !important;
      background: #f8f8f8 !important;
      margin: 1rem 0 !important;
      padding: 1rem !important;
      border-radius: 0 15px 15px 0 !important;
      box-shadow: 2px 2px 0px #333333 !important;
    }
    
    code {
      background: #f0f0f0 !important;
      border: 2px solid #000000 !important;
      border-radius: 8px !important;
      padding: 0.2rem 0.5rem !important;
      font-weight: 600 !important;
    }
    
    pre {
      background: #f0f0f0 !important;
      border: 3px solid #000000 !important;
      border-radius: 15px !important;
      padding: 1rem !important;
      box-shadow: 4px 4px 0px #333333 !important;
      margin: 1rem 0 !important;
    }
    
    ul, ol {
      padding-left: 2rem !important;
      
      li {
        margin-bottom: 0.5rem !important;
        font-weight: 600 !important;
      }
    }
    
    a {
      color: #000000 !important;
      text-decoration: underline !important;
      text-decoration-thickness: 2px !important;
      font-weight: 800 !important;
      
      &:hover {
        text-shadow: 1px 1px 0px #333333 !important;
      }
    }
  }
  
  /* Tooltip styles */
  .ql-snow .ql-tooltip {
    background: #ffffff !important;
    border: 3px solid #000000 !important;
    border-radius: 15px !important;
    box-shadow: 4px 4px 0px #333333 !important;
    padding: 1rem !important;
    
    input {
      border: 2px solid #000000 !important;
      border-radius: 8px !important;
      padding: 0.5rem !important;
      font-weight: 600 !important;
      margin: 0.5rem 0 !important;
      
      &:focus {
        outline: none !important;
        box-shadow: 2px 2px 0px #333333 !important;
        transform: translateY(-1px) !important;
      }
    }
    
    .ql-action,
    .ql-remove {
      border: 2px solid #000000 !important;
      border-radius: 8px !important;
      background: #ffffff !important;
      color: #000000 !important;
      font-weight: 800 !important;
      padding: 0.3rem 0.8rem !important;
      margin: 0 0.2rem !important;
      transition: all 0.3s ease !important;
      
      &:hover {
        background: #000000 !important;
        color: #ffffff !important;
        transform: translateY(-1px) !important;
        box-shadow: 2px 2px 0px #333333 !important;
      }
    }
  }
`;

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["link", "image"],
    ["clean"],
  ],
};

const quillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "color",
  "background",
  "align",
  "link",
  "image",
];

interface QuillEditorCustomProps {
  value: string;
  onChange: (value: string) => void;
  style?: React.CSSProperties;
  modules?: Record<string, unknown>;
  formats?: string[];
}

const QuillEditorCustom = ({
  value,
  onChange,
  style,
  modules,
  formats,
}: QuillEditorCustomProps) => {
  return (
    <ControllerEditor
      value={value}
      onChange={onChange}
      modules={modules ?? quillModules}
      formats={formats ?? quillFormats}
      style={style}
    />
  );
};

export default QuillEditorCustom;
