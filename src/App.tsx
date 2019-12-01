import React from 'react'
import { Layout, Button} from 'antd'

const { Header, Content, Sider } = Layout


const App: React.FC = () => {
  return (
    <div className="App" style={{width: '100%', height: '100%'}}>
		<Layout>
			<Layout>
			<Header>Header</Header>
			<Layout>
				<Sider>Sider</Sider>
				<Content>
					<Button type='primary'>测试</Button>
				</Content>
			</Layout>
			</Layout>
		</Layout>
    </div>
  );
}

export default App;
