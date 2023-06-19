"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Form from "@components/Form";

function CreatePrompt() {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = (e) => {};
  return (
    <Form
      type="Create"
      post={post}
      setpost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
}

export default CreatePrompt;
