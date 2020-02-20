import { Request, Response } from 'express'
import path from 'path'

class App {
  public get = async (req: Request, res: Response): Promise<any> => {
    res.setHeader('Content-Type', 'text/html')
    res.sendFile(path.join(__dirname, '../../dist/index.html'))
  }
}

export default App