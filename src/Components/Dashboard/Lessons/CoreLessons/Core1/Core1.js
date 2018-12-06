import React, { Component } from "react";
import Goals from "./Goals";
import { Container, Content, Editor, Title, Instructions } from "./Core1SC";
import { Button } from "../../../../resources/styles/masterStyles";

class Lesson extends Component {
  constructor() {
    super();
    this.state = {
      goals: false,
      title: "Title",
      number: "1",
      // lesson_id: this.props.lesson_id,
      lessongoals: [
        "get shwifty",
        "pump..... pump..... pump it up!",
        "now watch me oooooo crank that soulja boi",
        "pop, lock, and drop it"
      ],
      // iframe: "my59mjx84y"
      iframe: "30l5vp4jqq",
      module: "/src/App.js"
    };
    this.onClose = this.onClose.bind(this);
    this.onOpen = this.onOpen.bind(this);
  }

  componentDidMount() {
    //this.getlesson() -- get a lesson from db

    this.showGoals();
  }

  showGoals = () => {
    this.setState({ goals: true });
  };

  hideGoals = () => {
    this.setState({ goals: false });
  };

  onClose() {
    this.hideGoals();
  }

  onOpen() {
    this.showGoals();
  }

  render() {
    return (
      <Container>
        {this.state.goals ? (
          <Goals
            onClose={this.onClose}
            onOpen={this.onOpen}
            title={this.state.title}
            number={this.state.number}
            goals={this.state.lessongoals}
          />
        ) : null}

        <Content>
          <Title>
            <h1>{this.state.title}</h1>
            <a
              href="https://reactjs.org/docs/components-and-props.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Component Docs
            </a>
          </Title>
          <Instructions>
            {" "}
            Before you can begin to determine what the composition of a
            particular paragraph will be, you must first decide on an argument
            and a working thesis statement for your paper. What is the most
            important idea that you are trying to convey to your reader? The
            information in each paragraph must be related to that idea. In other
            words, your paragraphs should remind your reader that there is a
            recurrent relationship between your thesis and the information in
            each paragraph. A working thesis functions like a seed from which
            your paper, and your ideas, will grow. The whole process is an
            organic one—a natural progression from a seed to a full-blown paper
            where there are direct, familial relationships between all of the
            ideas in the paper. The decision about what to put into your
            paragraphs begins with the germination of a seed of ideas; this
            “germination process” is better known as brainstorming. There are
            many techniques for brainstorming; whichever one you choose, this
            stage of paragraph development cannot be skipped. Building
            paragraphs can be like building a skyscraper: there must be a
            well-planned foundation that supports what you are building. Any
            cracks, inconsistencies, or other corruptions of the foundation can
            cause your whole paper to crumble. So, let’s suppose that you have
            done some brainstorming to develop your thesis. What else should you
            keep in mind as you begin to create paragraphs? Every paragraph in a
            paper should be: Unified: All of the sentences in a single paragraph
            should be related to a single controlling idea (often expressed in
            the topic sentence of the paragraph). Clearly related to the thesis:
            The sentences should all refer to the central idea, or thesis, of
            the paper (Rosen and Behrens 119). Coherent: The sentences should be
            arranged in a logical manner and should follow a definite plan for
            development (Rosen and Behrens 119). Well-developed: Every idea
            discussed in the paragraph should be adequately explained and
            supported through evidence and details that work together to explain
            the paragraph’s controlling idea (Rosen and Behrens 119). How do I
            organize a paragraph? There are many different ways to organize a
            paragraph. The organization you choose will depend on the
            controlling idea of the paragraph. Below are a few possibilities for
            organization, with links to brief examples: Narration: Tell a story.
            Go chronologically, from start to finish. (See an example.)
            Description: Provide specific details about what something looks,
            smells, tastes, sounds, or feels like. Organize spatially, in order
            of appearance, or by topic. (See an example.) Process: Explain how
            something works, step by step. Perhaps follow a sequence—first,
            second, third. (See an example.) Classification: Separate into
            groups or explain the various parts of a topic. (See an example.)
            Illustration: Give examples and explain how those examples prove
            your point. (See the detailed example in the next section of this
            handout.)Before you can begin to determine what the composition of a
            particular paragraph will be, you must first decide on an argument
            and a working thesis statement for your paper. What is the most
            important idea that you are trying to convey to your reader? The
            information in each paragraph must be related to that idea. In other
            words, your paragraphs should remind your reader that there is a
            recurrent relationship between your thesis and the information in
            each paragraph. A working thesis functions like a seed from which
            your paper, and your ideas, will grow. The whole process is an
            organic one—a natural progression from a seed to a full-blown paper
            where there are direct, familial relationships between all of the
            ideas in the paper. The decision about what to put into your
            paragraphs begins with the germination of a seed of ideas; this
            “germination process” is better known as brainstorming. There are
            many techniques for brainstorming; whichever one you choose, this
            stage of paragraph development cannot be skipped. Building
            paragraphs can be like building a skyscraper: there must be a
            well-planned foundation that supports what you are building. Any
            cracks, inconsistencies, or other corruptions of the foundation can
            cause your whole paper to crumble. So, let’s suppose that you have
            done some brainstorming to develop your thesis. What else should you
            keep in mind as you begin to create paragraphs? Every paragraph in a
            paper should be: Unified: All of the sentences in a single paragraph
            should be related to a single controlling idea (often expressed in
            the topic sentence of the paragraph). Clearly related to the thesis:
            The sentences should all refer to the central idea, or thesis, of
            the paper (Rosen and Behrens 119). Coherent: The sentences should be
            arranged in a logical manner and should follow a definite plan for
            development (Rosen and Behrens 119). Well-developed: Every idea
            discussed in the paragraph should be adequately explained and
            supported through evidence and details that work together to explain
            the paragraph’s controlling idea (Rosen and Behrens 119). How do I
            organize a paragraph? There are many different ways to organize a
            paragraph. The organization you choose will depend on the
            controlling idea of the paragraph. Below are a few possibilities for
            organization, with links to brief examples: Narration: Tell a story.
            Go chronologically, from start to finish. (See an example.)
            Description: Provide specific details about what something looks,
            smells, tastes, sounds, or feels like. Organize spatially, in order
            of appearance, or by topic. (See an example.) Process: Explain how
            something works, step by step. Perhaps follow a sequence—first,
            second, third. (See an example.) Classification: Separate into
            groups or explain the various parts of a topic. (See an example.)
            Illustration: Give examples and explain how those examples prove
            your point. (See the detailed example in the next section of this
            handout.)
          </Instructions>
          <div className="navbuttons">
            <Button position="fixed" top="92%" left="13%">
              Finished
            </Button>
          </div>
        </Content>

        <Editor>
          <iframe
            src={`https://codesandbox.io/embed/${
              this.state.iframe
            }?forcerefresh=1&view=split&verticallayout=0&editorsize=50&module=${
              this.state.module
            }`}
            title="test_lesson"
            width="100%"
            height="890px"
            border="0"
            border-radius="4px"
            overflow="hidden"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          />
        </Editor>
      </Container>
    );
  }
}

export default Lesson;
