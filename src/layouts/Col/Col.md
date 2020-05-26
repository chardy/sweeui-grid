Basic Layout:

```jsx
<Grid>
  <Row>
    <Col xs={12} sm={3} md={2} lg={1} ><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>1</div></Col>
    <Col xs={6} sm={6} md={8} lg={10} ><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>2</div></Col>
    <Col xs={6} sm={3} md={2} lg={1} ><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>3</div></Col>
  </Row>
</Grid>
```

We can implement without Grid as well.

```jsx
  <Row>
    <Col xs={12} sm={6} md={4} lg={2}>
      <div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>1</div>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>2</div>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>3</div>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>4</div>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>5</div>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>6</div>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>7</div>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>8</div>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>9</div>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>10</div>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>11</div>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>12</div>
    </Col>
    <Col xl={12}>
      <div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>xl 12</div>
    </Col>
  </Row>
```

Offset Sample

```jsx
<Row>
  <Col xsOffset={11} xs={1}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>offset 11</div></Col>
  <Col xsOffset={10} xs={2}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>offset 10</div></Col>
  <Col xsOffset={9} xs={3}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>offset 9</div></Col>
  <Col xsOffset={8} xs={4}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>offset 8</div></Col>
  <Col xsOffset={7} xs={5}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>offset 7</div></Col>
  <Col xsOffset={6} xs={6}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>offset 6</div></Col>
  <Col xsOffset={5} xs={7}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>offset 5</div></Col>
  <Col xsOffset={4} xs={8}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>offset 4</div></Col>
  <Col xsOffset={3} xs={9}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>offset 3</div></Col>
  <Col xsOffset={2} xs={10}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>offset 2</div></Col>
  <Col xsOffset={1} xs={11}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>offset 1</div></Col>
</Row>
```

Default to lg or anything from 'xs', 'sm', 'md', 'lg', 'xl'

```jsx
<Row>
  <Col lg><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>1</div></Col>
  <Col lg><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>2</div></Col>
  <Col lg><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>3</div></Col>
</Row>
```

The component <Col> if not apecify will auto distribute

```jsx
<Row>
  <Col lg><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>2</div></Col>
  <Col lg><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>3</div></Col>
</Row>
```

Distribute 'around'

```jsx
<Row around="lg">
  <Col lg={3}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>1</div></Col>
  <Col lg={3}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>2</div></Col>
  <Col lg={3}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>3</div></Col>
</Row>
```

Distribute 'between'

```jsx
<Row between="lg">
  <Col lg={3}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>1</div></Col>
  <Col lg={3}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>2</div></Col>
  <Col lg={3}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>3</div></Col>
</Row>
```

Distribute 'start'

```jsx
<Row start="lg">
  <Col lg={3}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>1</div></Col>
  <Col lg={3}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>2</div></Col>
  <Col lg={3}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>3</div></Col>
</Row>
```

Distribute 'end'

```jsx
<Row end="lg">
  <Col lg={3}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>1</div></Col>
  <Col lg={3}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>2</div></Col>
  <Col lg={3}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>3</div></Col>
</Row>
```

Align 'top'

```jsx
<Row top="lg" style={{background: "#efefef", height: "100px"}}>
  <Col lg={4}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>1</div></Col>
  <Col lg={4}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>2</div></Col>
  <Col lg={4}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>3</div></Col>
</Row>
```

Align 'middle'

```jsx
<Row middle="lg" style={{background: "#efefef", height: "100px"}}>
  <Col lg={4}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>1</div></Col>
  <Col lg={4}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>2</div></Col>
  <Col lg={4}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>3</div></Col>
</Row>
```

Align 'bottom'

```jsx
<Row bottom="lg" style={{background: "#efefef", height: "100px"}}>
  <Col lg={4}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>1</div></Col>
  <Col lg={4}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>2</div></Col>
  <Col lg={4}><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>3</div></Col>
</Row>
```

Hidden if...

```jsx
<Row>
  <Col lg><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>1</div></Col>
  <Col lg><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>2</div></Col>
  <Col lg hidden="xs"><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>3</div></Col>
</Row>
```

```jsx
<Grid>
  <Col><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>1</div></Col>
  <Col><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>2</div></Col>
  <Col hidden="xs"><div style={{background: "#FFF", border: "1px solid #dfdfdf", padding: "1em"}}>3</div></Col>
</Grid>
```
