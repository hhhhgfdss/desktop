import * as React from 'react'

import { FileStatus } from '../../models/status'
import { Octicon, OcticonSymbol } from '../octicons'

interface IPathLabelProps {
  /** the current path of the file */
  readonly path: string,
  /** the previous path of the file, if applicable */
  readonly oldPath?: string,
  /** the type of change applied to the file */
  readonly status: FileStatus
}

/**
 * Render the path details for a given file.
 *
 * For renames, this will render the old path as well as the current path.
 * For other scenarios, only the current path is rendered.
 *
 */
export class PathLabel extends React.Component<IPathLabelProps, void> {
  public render() {

    const props: React.HTMLProps<HTMLLabelElement> = {
      className: 'path',
      title: this.props.path,
    }

    if (this.props.status === FileStatus.Renamed && this.props.oldPath) {
      return (
        <label {...props}>
          {this.props.oldPath} <Octicon symbol={OcticonSymbol.arrowRight} /> {this.props.path}
        </label>
      )
    } else {
      return <label {...props}>{this.props.path}</label>
    }
  }
}