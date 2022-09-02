import { formatDate } from "../../../helpers/formatters/formatters";
import { Article } from "../../../models"
import { Button, Text, Title } from "../../atoms";
import { SectionsCardInfo, TableSection } from "../../atoms/Sections/SectionStyle";
import { TableContainer } from "../../atoms/Table";
import './table.style.scss';

interface TableProps {
		data: Article[];
}

export const Table = ({data}: TableProps) => {
	return (
		<TableSection>
			<SectionsCardInfo>
				<div className="title">
					<Title size="xl">Articles</Title>
				</div>
				<div className="subtitle">
					<Text tertiary size="xl">
						Publish a new blog article to feature in the Easybank
						homepage.
					</Text>
				</div>
			</SectionsCardInfo>
			<div className="section-details">
				<TableContainer>
					<thead className="table-header" >
						<tr>
							<th>Author Name</th>
							<th>Title</th>
							<th>Content</th>
							<th>Date</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{data.map((article: Article) => (
							<tr key={article.id}>
								<td>{article.author}</td>
								<td>{article.title}</td>
								<td>{article.content}</td>
								<td>{formatDate(article.date)}</td>
								<td>
									<Button
										background=""
										onClick={() => {
											console.log('hi');
										}
										}
									>
										Edit
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</TableContainer>
			</div>
		</TableSection>
	);
}