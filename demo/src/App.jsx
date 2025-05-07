import React, { useEffect, useState } from "react";
import {
  Avatar,
  AvatarStackedList,
  Breadcrumb,
  Button,
  Card,
  Dropdown,
  Form,
  Input,
  Modal,
  Spinner,
  Timeline,
  Typography,
  useConfirm,
  Alert,
  Badge,
  Steps,
  Ribbon,
  Table,
  useModal,
} from "../../src/index";
import { Col, Hr, Row } from "../../src/util";
import {
  IconAlertCircle,
  IconAlien,
  IconAward,
  IconBrandTwitter,
  IconCircleDashedCheck,
  IconComet,
  IconFileDownload,
  IconInfoHexagon,
  IconRadioactive,
  IconShoppingCart,
} from "@tabler/icons-react";
import { Link } from "../../src/typography";
import {
  DropdownInput,
  EnclosedSelectGroup,
  SelectGroup,
  Switch,
} from "../../src/input";
import { Router, Routes } from "react-router-dom";
import { TablerProvider } from "../../src/provider/Tabler";
const { H1, H2, H3, H4, Text, Strong, I, U, B, Special } = Typography;

const colors = [
  "blue",
  "azure",
  "indigo",
  "purple",
  "pink",
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "teal",
  "cyan",
];

const variants = [
  null,
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

export default () => (
  <TablerProvider colorScheme="ligth">
    <div style={{ margin: 10 }}>
      <H1 style={{ fontSize: 48, lineHeight: "unset" }}>Tabler React 2</H1>
      <Col gap={1}>
        <Card title="Typography" size="sm">
          <H1>Typography.H1</H1>
          <H2>Typography.H2</H2>
          <H3>Typography.H3</H3>
          <H4>Typography.H4</H4>
          <Text>Typography.Text</Text>
          <Col>
            <Strong>Typography.Strong</Strong>
            <B>Typography.B</B>
            <I>Typography.I</I>
            <U>Typography.U</U>
          </Col>
          <br />
          <Card title={"Special Typography"}>
            <Col>
              {["Abbr", "Cite", "Del", "Em", "Ins", "S", "Samp", "Var"].map(
                (El) => {
                  const EoF = Typography.Special[El];
                  return <EoF key={El}>{El}</EoF>;
                }
              )}
              <span>
                Time: <Special.Time>18:00</Special.Time>
              </span>
              <span>
                Sub <Special.Sub>Subscript</Special.Sub>
              </span>
              <span>
                Sup <Special.Sup>Superscript</Special.Sup>
              </span>
            </Col>
            <Special.Kbd>Kbd</Special.Kbd> <br />
            <Special.Mark>Mark</Special.Mark> <br />
            <Special.Code>Code</Special.Code>
          </Card>
        </Card>
        <Card title={"Cards"} size="sm">
          <H2>Colors</H2>
          <Row wrap gap={1}>
            {[
              "primary",
              "secondary",
              "success",
              "danger",
              "warning",
              "info",
              "light",
              "dark",
            ].map((variant) => (
              <Card
                key={variant}
                title={variant}
                variant={variant}
                size="sm"
                style={{ width: "calc(25% - 8px)" }}
              >
                {variant} card
              </Card>
            ))}
          </Row>
          <H2>Color Positions</H2>
          <Row gap={1}>
            {["top", "side"].map((pos) => (
              <Card
                key={pos}
                title={pos}
                variant={"danger"}
                variantPos={pos}
                size="sm"
                style={{ width: "calc(25% - 8px)" }}
              >
                {pos} card
              </Card>
            ))}
          </Row>
          <H2>Special</H2>
          <Row wrap gap={1}>
            <Card title="Stacked" stacked style={{ width: "calc(25% - 8px)" }}>
              Stacked Card
            </Card>
            <Card
              size="md"
              variantPos="top"
              tabs={[
                { title: "Tab 1", content: <p>Content of Tab 1</p> },
                { title: "Tab 2", content: <p>Content of Tab 2</p> },
                { title: "Tab 3", content: <p>Content of Tab 3</p> },
              ]}
              style={{ width: "calc(50% - 16px)" }}
            />
          </Row>
        </Card>
        <Card title={"Horizontal Rules"}>
          <Text>Standard hr's</Text>
          <Hr />
          <Text>Look like this. Hr's with text look like this:</Text>
          <Hr text="Just a text attr!" />
          <Text>Neat huh!</Text>
        </Card>
        <Card title="Alerts">
          <Row wrap gap={1}>
            {[
              {
                variant: "danger",
                icon: <IconRadioactive />,
              },
              {
                variant: "warning",
                icon: <IconAlertCircle />,
              },
              {
                variant: "success",
                icon: <IconCircleDashedCheck />,
              },
              {
                variant: "info",
                icon: <IconInfoHexagon />,
              },
              {
                variant: "dark",
                icon: <IconComet />,
              },
            ].map((v) => (
              <Alert
                key={v.variant}
                variant={v.variant}
                title={v.variant}
                icon={v.icon}
              >
                {v.variant}
              </Alert>
            ))}
            <Alert title="dismissable" onDismiss={() => alert("Gone!")}>
              Dismissable
            </Alert>
          </Row>
        </Card>
        <Card title="Form Elements">
          <Card title="Autosize Textarea">
            <Form.Autosize
              title="Autosize Textarea"
              placeholder="Type here..."
            />
          </Card>
        </Card>
        <Card title="Avatars">
          <Avatar src="https://picsum.photos/200" initials={"JC"} />
          <Avatar initials={"JC"} />
          <Avatar initials={"JC"} status="danger" />
          <Avatar initials={"JC"} status="info" badge={5} />
          <Avatar
            dicebearSeed={"asdf"}
            dicebearStyle={"adventurer"}
            status="info"
            badge={5}
          />
          <br />
          <br />
          <Avatar dicebear initials={"JC"} size="lg" />
          <br />
          <br />
          <AvatarStackedList>
            <Avatar initials={"JC"} />
            <Avatar dicebear initials={"JC"} />
            <Avatar initials={"JC"} />
          </AvatarStackedList>
          <br />
          <Text>
            Defaults to just showing initials, but you can also use a dicebear
            seed-based avatar by passing the dicebear prop. Specify the style
            with dicebear="style". A specific image URL can be passed with the
            src prop. Dicebear styles can be found{" "}
            <Link href="https://dicebear.com/styles" target="blank">
              here
            </Link>
            .
          </Text>
        </Card>
        <Card title="Badges">
          <H2>Default</H2>
          {colors.map((color) => (
            <Badge key={color} color={color}>
              {color}
            </Badge>
          ))}
          <H2>Outline</H2>
          {colors.map((color) => (
            <Badge outline key={color} color={color}>
              {color}
            </Badge>
          ))}
          <H2>Soft + outline</H2>
          {colors.map((color) => (
            <Badge outline soft key={color} color={color}>
              {color}
            </Badge>
          ))}
          <H2>Soft</H2>
          {colors.map((color) => (
            <Badge soft key={color} color={color}>
              {color}
            </Badge>
          ))}
        </Card>
        <Card title="Breadcrumbs">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#" active>
              Home
            </Breadcrumb.Item>
          </Breadcrumb>
        </Card>
        {_Buttons}
        <_Dropdown />
        <_Modal />
        <_Ribbons />
        <_Spinner />
        <_Steps />
        <_Table />
        <_Timeline />
        <_Input />
        <_Switch />
        <_SelectGroup />
      </Col>
    </div>
  </TablerProvider>
);

const _Buttons = (
  <Card title="Links & Buttons">
    <H2>Inline link</H2>
    <Link href="https://google.com">Google</Link>
    <H2>Button Links</H2>
    <Text>
      Buttons and links are both accessed by the same component. A link (anchor)
      is returned when an HREF attribute is passed. Otherwise, a button is
      returned.
    </Text>
    {variants.map((variant) => (
      <Button key={variant} variant={variant} href="#">
        {variant || "default"}
      </Button>
    ))}
    <H2>Buttons</H2>
    {variants.map((variant) => (
      <Button key={variant} variant={variant} onClick={() => alert("Clicked")}>
        {variant || "default"}
      </Button>
    ))}
    <H2>Disabled</H2>
    {variants.map((variant) => (
      <Button key={variant} variant={variant} disabled>
        {variant || "default"}
      </Button>
    ))}
    <H2>Colors</H2>
    {colors.map((color) => (
      <Button key={color} color={color} onClick={() => alert("Clicked")}>
        {color}
      </Button>
    ))}
    <H2>Ghost</H2>
    {variants.map((variant) => (
      <Button key={variant} variant={variant} ghost>
        {variant || "default"}
      </Button>
    ))}
    <H2>Shapes</H2>
    <Button square>square</Button>
    <Button pill>pill</Button>
    <H2>Outline</H2>
    {variants.map((variant) => (
      <Button key={variant} variant={variant} outline>
        {variant || "default"}
      </Button>
    ))}
    <H2>Sizes</H2>
    <Button size="sm">sm</Button>
    <Button size="md">md</Button>
    <Button size="lg">lg</Button>
    <H2>Loading</H2>
    <Button loading>Loading</Button>
  </Card>
);

const _Dropdown = () => {
  return (
    <Card title="Dropdowns">
      <Dropdown
        prompt="Open Dropdown"
        items={[
          {
            type: "item",
            href: "#",
            text: "Link 1",
          },
          {
            type: "item",
            onclick: () => alert("Clicked"),
            text: "Button 2",
            disabled: true,
          },
          {
            type: "divider",
          },
          {
            type: "header",
            text: "Header",
          },
          {
            type: "item",
            href: "#",
            text: "Link 3",
            active: true,
          },
          {
            type: "item",
            onclick: () => alert("Clicked"),
            text: "Button 4",
          },
        ]}
      />
    </Card>
  );
};

const _Modal = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const { confirm, ConfirmModal } = useConfirm({
    title: "Are you sure?",
    text: "This action cannot be undone.",
    commitText: "Yes",
    cancelText: "No",
  });

  const { modal, ModalElement } = useModal({
    title: "Modal Title",
    text: (
      <p>
        HULLO <b>world</b>
        <br />
        <Input title="Input" placeholder="Type here..." />
      </p>
    ),
    commitText: "Yes",
    cancelText: "No",
  });

  const handleClick = async () => {
    const result = await confirm({ title: "Are you sure?" });
    if (result) {
      console.log("User confirmed!");
      // Do something if confirmed
    } else {
      console.log("User canceled!");
      // Do something if canceled
    }
  };

  return (
    <Card title="Modals">
      <Button onClick={() => setOpen1(true)}>Open standard modal</Button>
      <Modal
        open={open1}
        onClose={() => setOpen1(false)}
        title="Modal Title"
        buttons={[
          {
            text: "Close",
            variant: "danger",
            attrs: { outline: true },
            onClick: () => setOpen1(false),
          },
        ]}
        modalId="sfp9h89uashdfgp9a8sdpufioadsf"
      >
        <Text>A standard modal!</Text>
      </Modal>

      <Button onClick={() => setOpen2(true)}>Open danger modal</Button>
      <Modal
        open={open2}
        onClose={() => setOpen2(false)}
        title="Modal Title"
        status="danger"
        buttons={[
          {
            text: "Close",
            variant: "danger",
            attrs: { outline: true },
            onClick: () => setOpen2(false),
          },
        ]}
        modalId="a-s9dfg8uas-dg90au8sgi"
      >
        <Text>A danger modal!</Text>
      </Modal>
      <H2>Confirm Modals</H2>
      <Button onClick={handleClick}>Open confirm modal</Button>
      {ConfirmModal}
      <Button onClick={() => modal({ title: "asdf" })}>
        Open hook-driven modal
      </Button>
      {ModalElement}
    </Card>
  );
};

const _Ribbons = () => {
  return (
    <Card title="Ribbons">
      <H2>Colors</H2>
      <Row wrap gap={1}>
        {colors.map((color) => (
          <Card key={color} size="sm">
            <Ribbon variant={color} />
            <br />A {color} ribbon!
          </Card>
        ))}
      </Row>
      <H2>Variants</H2>
      <Row wrap gap={1}>
        {variants.map((variant) => (
          <Card key={variant} size="sm">
            <Ribbon color={variant} />
            <br />A {variant || "default"} ribbon!
          </Card>
        ))}
      </Row>
      <H2>Shapes</H2>
      <Row wrap gap={1}>
        <Card size="sm">
          <Ribbon shape="bookmark" />
          <br />A bookmark ribbon!
        </Card>
        <Card size="sm">
          <Ribbon />
          <br />A standard ribbon!
        </Card>
      </Row>
      <H2>Positions</H2>
      <Row wrap gap={1}>
        {["top", "bottom", "start", "end"].map((pos) => (
          <Card key={pos} size="sm">
            <Ribbon position={pos} />
            <br />A {pos} ribbon!
          </Card>
        ))}
      </Row>
      <H2>Content</H2>
      <Row wrap gap={1}>
        {[<IconAward />, <IconAlien />, <IconRadioactive />].map((content) => (
          <Card key={content} size="sm">
            <Ribbon content={content} />
            <br />A ribbon with content!
          </Card>
        ))}
      </Row>
    </Card>
  );
};

const _Spinner = () => {
  return (
    <Card title="Spinners">
      <Row wrap gap={1}>
        <H2>Colors</H2>
        {colors.map((color) => (
          <Spinner color={color} key={color} />
        ))}
        {variants.map((variant) => (
          <Spinner variant={variant} key={variant} />
        ))}
      </Row>
      <H2>Sizes</H2>
      {["sm", "lg"].map((size) => (
        <Spinner size={size} key={size} />
      ))}
    </Card>
  );
};

const _Steps = () => {
  const stepData = [
    {
      text: "Step 1",
      tooltip: "Step 1 description",
      active: false,
    },
    {
      text: "Step 2",
      tooltip: "Step 2 description",
      active: false,
      onClick: () => alert("Clicked"),
    },
    {
      text: "Step 3",
      tooltip: "Step 3 description",
      active: true,
      href: "#asfd",
    },
    {
      text: "Step 4",
      tooltip: "Step 4 description",
      active: false,
    },
  ];

  return (
    <Card title="Steps">
      <H2>Default Steps</H2>
      <Steps steps={stepData} />
      <H2>Colors</H2>
      {colors.map((color) => (
        <Steps key={color} steps={stepData} color={color} />
      ))}
      <H2>Numbered</H2>
      <Steps steps={stepData} numbered />
      <H2>Hide Text</H2>
      <Steps steps={stepData} hideText />
      <H2>Vertical</H2>
      <Steps steps={stepData} vertical />
    </Card>
  );
};

const _Table = () => {
  const columns = [
    { label: "Name", accessor: "name" },
    { label: "Title", accessor: "title", className: "text-secondary" },
    {
      label: "Email",
      accessor: "email",
      className: "text-secondary",
      render: (email) => (
        <a href={`mailto:${email}`} className="text-reset">
          {email}
        </a>
      ),
      sortable: true,
    },
    {
      label: "Role",
      accessor: "role.t",
      className: "text-secondary",
      sortable: true,
    },
    { label: "Action", accessor: "action", render: () => <a href="#">Edit</a> },
  ];

  const data = [
    {
      name: "Paweł Kuna",
      title: "UI Designer, Training",
      email: "paweluna@howstuffworks.com",
      role: { t: "User" },
    },
    {
      name: "Jeffie Lewzey",
      title: "Chemical Engineer, Support",
      email: "jlewzey1@seesaa.net",
      role: { t: "Admin" },
    },
    {
      name: "Mallory Hulme",
      title: "Geologist IV, Support",
      email: "mhulme2@domainmarket.com",
      role: { t: "User" },
    },
    {
      name: "Dunn Slane",
      title: "Research Nurse, Sales",
      email: "dslane3@epa.gov",
      role: { t: "Owner" },
    },
    {
      name: "Emmy Levet",
      title: "VP Product Management, Accounting",
      email: "elevet4@senate.gov",
      role: { t: "Admin" },
    },
  ];

  return (
    <Card title="Tables">
      <Table columns={columns} data={data} />
    </Card>
  );
};

const _Timeline = () => {
  const events = [
    {
      icon: <IconBrandTwitter />,
      iconBgColor: "twitter",
      time: "10 hrs ago",
      title: "+1150 Followers",
      description: "You’re getting more and more followers, keep it up!",
    },
    {
      icon: <IconShoppingCart />,
      iconBgColor: "red",
      time: "2 hrs ago",
      title: "+3 New Products were added!",
      description: "Congratulations!",
    },
    {
      icon: <IconFileDownload />,
      time: "1 day ago",
      title: "Database backup completed!",
      description: "Download the latest backup.",
      extraContent: <a href="#">latest backup</a>,
    },
  ];

  return (
    <Card title="Timeline">
      <Card title="Standard Timeline">
        <Timeline events={events} />
      </Card>

      <Card title="Dense Timeline">
        <Timeline dense events={events} />
      </Card>
    </Card>
  );
};

const _Input = () => {
  const [value, setValue] = useState("Hey world");
  const [dropdownValue, setDropdownValue] = useState({
    id: 1,
    label: "One",
  });

  return (
    <Card title="Inputs">
      <H2>Basic Inputs</H2>
      <Text>{value}</Text>
      <Input
        title="Input"
        placeholder="Type here..."
        value={value}
        onInput={setValue}
      />
      <Input
        title="Input"
        placeholder="Type here..."
        label="Input with a label"
        value={value}
        onInput={setValue}
      />
      <Input
        title="Input"
        placeholder="Type here..."
        label="Input with a label and help text"
        value={value}
        onInput={setValue}
        helpText="This is some help text"
        helpPrompt="?"
      />
      <Input
        title="Input"
        placeholder="Type here..."
        label="Required Input"
        value={value}
        onInput={setValue}
        required
      />
      <Input
        title="Input"
        placeholder="Type here..."
        label="Input with a label description"
        value={value}
        onInput={setValue}
        labelDescription={"37/100"}
      />
      <Input
        title="Input"
        placeholder="Type here..."
        label="Input with a hint"
        value={value}
        onInput={setValue}
        hint={"This is a hint"}
      />
      <H2>Input with icons</H2>
      <Row gap={1}>
        <Input
          title="Input"
          placeholder="Type here..."
          icon={<IconAward strokeWidth={1.5} />}
          iconPos="leading"
        />
        <Input
          title="Input"
          placeholder="Type here..."
          icon={<IconAward strokeWidth={1.5} />}
          iconPos="trailing"
        />
        <Input
          title="Input"
          placeholder="Type here..."
          loader
          iconPos="leading"
        />
        <Input
          title="Input"
          placeholder="Type here..."
          loader
          iconPos="trailing"
        />
      </Row>
      <H2>Separated Inputs</H2>
      <Row gap={1}>
        <Card>
          <Input
            title="Input"
            placeholder="Type here..."
            icon={<IconAward strokeWidth={1.5} size={18} />}
            iconPos="trailing"
            separated
          />
        </Card>
        <Card>
          <Input
            title="Input"
            placeholder="Type here..."
            loader
            iconPos="trailing"
            separated
          />
        </Card>
      </Row>
      <H2>Prepended and Appended Text or Links</H2>
      <Row gap={1}>
        <Input
          title="Input"
          placeholder="Type here..."
          prependedText="https://"
          appendedText=".com"
        />
        <Input
          title="Input"
          placeholder="Type here..."
          prependedText="https://"
          appendedLinkText="Link"
          appendedLinkHref="#"
        />
        <Input
          title="Input"
          placeholder="Type here..."
          appendedLinkText="Link"
          appendedLinkOnClick={() => alert("Clicked")}
        />
      </Row>
      <H2>Variants</H2>
      <Row gap={1}>
        {variants.map((variant) => (
          <Input
            key={variant}
            title="Input"
            placeholder="Type here..."
            variant={variant}
          />
        ))}
      </Row>
      <Hr />
      <H2>Dropdown</H2>
      {/* {JSON.stringify(dropdownValue)} */}
      <div
        style={{
          padding: 20,
        }}
      >
        <DropdownInput
          prompt="Select a value"
          values={[
            { id: 1, label: "One" },
            { id: 2, label: "Two" },
            { id: 3, label: <b style={{ color: "red" }}>Three</b> },
          ]}
          onChange={setDropdownValue}
          value={dropdownValue}
          color="red"
          outline
        />
      </div>
    </Card>
  );
};

const _Switch = () => {
  const [switchValue, setSwitchValue] = useState(true);

  return (
    <Card title="Switches">
      {JSON.stringify(switchValue)}
      <Switch value={switchValue} onChange={setSwitchValue} label="Switch" />
      <H2>Colors</H2>
      <Row gap={1}>
        {colors.map((color) => (
          <Switch
            key={color}
            value={switchValue}
            onChange={setSwitchValue}
            label={color}
            color={color}
          />
        ))}
      </Row>
    </Card>
  );
};

const _SelectGroup = () => {
  const [selectValue, setSelectValue] = useState([
    { value: "one", label: "One" },
  ]);
  const [singleSelectValue, setSingleSelectValue] = useState({
    value: "one",
    label: "One",
  });
  useEffect(() => {
    console.log(singleSelectValue);
  }, [singleSelectValue]);

  return (
    <Card title="Select Groups">
      <H2>Multi Select</H2>
      {/* {JSON.stringify(selectValue)} */}
      <br />
      <SelectGroup
        items={[
          { value: "one", label: "One" },
          { value: "two", label: "Two" },
          { value: "three", label: "Three" },
        ]}
        value={selectValue}
        onChange={setSelectValue}
        multiple
      />
      <Hr />
      <H2>Single Select</H2>
      {/* {JSON.stringify(singleSelectValue)} */}
      <br />
      <SelectGroup
        items={[
          { value: "one", label: "One" },
          { value: "two", label: "Two" },
          { value: "three", label: "Three" },
        ]}
        value={singleSelectValue}
        onChange={(v) => {
          console.log(v);
          setSingleSelectValue(v);
        }}
      />
      <Hr />
      <H2>Enclosed Select Group</H2>
      <br />
      <EnclosedSelectGroup
        items={[
          { value: "one", label: <b>One</b> },
          { value: "two", label: "Two" },
          { value: "three", label: "Three" },
        ]}
        value={singleSelectValue}
        onChange={setSingleSelectValue}
      />
      <br /> <br />
      <EnclosedSelectGroup
        direction="column"
        items={[
          { value: "one", label: <b>One</b> },
          { value: "two", label: "Two" },
          { value: "three", label: "Three" },
        ]}
        value={singleSelectValue}
        onChange={setSingleSelectValue}
      />
      <br />
      <br />
      <EnclosedSelectGroup
        multiple
        value={selectValue}
        onChange={(v) => {
          console.log(v);
          setSelectValue(v);
        }}
        items={[
          { value: "one", label: <b>One</b> },
          { value: "two", label: "Two" },
          { value: "three", label: "Three" },
        ]}
      />
      <EnclosedSelectGroup
        multiple
        direction="column"
        value={selectValue}
        onChange={(v) => {
          console.log(v);
          setSelectValue(v);
        }}
        items={[
          { value: "one", label: <b>One</b> },
          { value: "two", label: "Two" },
          { value: "three", label: "Three" },
        ]}
      />
    </Card>
  );
};
